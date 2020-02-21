---
title: iOS 键盘难题与可见视口（VisualViewport）API
date: 2020-02-21
featured_image: https://images.unsplash.com/photo-1526045612212-70caf35c14df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60
---

> Web 开发者与 iOS 长达四年的较量，终于在 iOS 13 发布这一刻落下帷幕。

## iOS 8.2 和它的键盘难题

2015 年三月，iOS 发布了 8.2 版本。这在当时看来也许只是这个现代的操作系统的一次小更新，但在 Web 开发者眼里，有些微妙的问题产生了。这是一件在 Android 世界里想象不到的麻烦事儿。

在此之前 Web 开发者都非常清楚，在 `window` 全局对象上的 `innerWidth`/`innerHeight` 表示浏览器窗口中可以看到页面的区域的尺寸，而 `outerWidth`/`outerHeight` 表示浏览器窗口整体的尺寸。可以看到页面的区域又被称为「视口」（Viewport），在 CSS 的世界里，任何 `position: fixed` 的元素都会脱离文档流并以视口为基准进行定位，以便在页面滚动时让这些元素相对于窗口固定，例如桌面 Web 设计中常见的头部、侧边栏、「返回顶部」按钮等等。

可是从 iOS 8.2 开始，这些概念开始不那么灵了。

### 难题一：不可靠的 fixed

![image](https://user-images.githubusercontent.com/5051300/74962199-69596200-544a-11ea-867e-e8db24e44f76.png)

iOS 8.2 以后，也许是为了满足设计上的磨砂半透明键盘后面能有点东西，达到若隐若现的效果，又或者是因为交互体验上，不想因为键盘动画上推过程中发生多次重新渲染，iOS 唯一指定浏览器内核、Webkit 鼻祖 Safari 将 `fixed` 元素的布局基准区域从键盘上方的可见区域改成了键盘背后的整个视窗。

上图是对于一般情况的呈现。当你使用其他传统设备访问一个页面时（如左图），滚动到某个位置（紫色边框线的顶部）后，使用双指放大到一个小区域内（图中「可视区域」+「不透明键盘」的区域），然后点击某个输入框开始编写文字。此时，窗口（`window` 对象）会产生一次 `resize` 事件，由于键盘的挤压，`fixed` 元素的基准区域会变成紫色边框线标注的区域。

在 iOS 8.2+ 设备中（如右图），滚动到某个位置后，使用双指放大到一个小区域内（图中「可视区域」+「半透明键盘」的区域），然后点击某个输入框开始编写文字，此时 `window` 对象不再产生 `resize` 事件，CSS 和 JS 都无从得知软键盘的开启，更不知道键盘占据了多少区域，因此，`fixed` 元素的基准区保留在右图紫色区域，不再变化。

因为上图是一种一般情况，这里考虑了放大，似乎从肉眼看来，可视区域内的布局没有受到什么影响。但在现代移动端 Web 设计中，我们常常使用 Viewport Meta Tag 以及屏蔽多点触摸和双击手势等方式来禁止放大页面，此时问题就会凸显出来：

![image](https://user-images.githubusercontent.com/5051300/74963876-69a72c80-544d-11ea-98e2-a87c0f73724c.png)

进入移动互联网时代之后，我们在手机上浏览的页面更多变成了专为移动设备设计的页面，它们狭长、不需要放大就适合阅读。这时，在其他传统设备上，键盘弹起后，`window` 对象发生 `resize`，所有 `fixed` 布局的元素自动被推至键盘上方的区域之内；而到了 iOS 8.2 的设备上，键盘弹起后，`window` 对象不再发生 `resize`，`fixed` 元素也保留在原来的位置，丝毫注意不到键盘的存在。

这对于普通的 Web 应用来说不会带来太大的影响，但对于一些需要追求特殊交互的应用来说，打击是巨大的。**最大的问题在于，再也没有东西可以牢靠地吸附在键盘上方了，无论是一行提示语、一条工具栏，还是一个自动完成列表，都再也做不到了。**

### 难题二：自作聪明的页面上推

正如上图右侧所呈现的，当键盘弹起时，页面无法感知到键盘的存在。那么，如果将要输入的目标（即「输入框」，例如 `input`、`textarea` 或一般的 `contenteditable` 元素）正好被弹起的键盘遮住，体验不会很糟糕吗？

iOS 的设计者想到了这一点，然后它们以一个聪明的方式解决了：滚动。

![image](https://user-images.githubusercontent.com/5051300/74966210-9e1ce780-5451-11ea-93dc-38fe4e4980d2.png)

像上图这样，点击输入框开始输入时，键盘动画弹起的过程中，页面会随之一起滚动（如果满足一定的条件也会同时进行缩放，此处忽略这种情况），但滚动的结果有些出乎意料：输入框本身可以理解地滚动到了实际可视区域的正中间，但 `fixed` 元素不会发生重新计算，而是保持原来的相对位置，跟着输入框一起被上推；在滚动过程中，还会允许屏幕底部超出页面底部（「滚动过头」），以便让输入框尽可能露出来。收起键盘后，「滚动过头」的部分会被弹回，`fixed`元素发生重新计算，但**页面并不会回到与打开键盘前相同的位置**。

这看起来并没有太多问题，但这里的问题是：假如我们有一个**单屏 Web 应用**，即将 `html` 元素设置为 `overflow: hidden`，问题就会变成这样：

![image](https://user-images.githubusercontent.com/5051300/75001808-6340a100-549d-11ea-8bb8-4a9e44f91913.png)

打开键盘前，页面处于不可滚动的状态，这完全符合我们的预期；但打开键盘后，无论键盘是否遮住输入框，**页面变得可滚动了**。换句话说，视口（Viewport）这个概念在这样的情况下竟然「悬空」，与屏幕上实际的显示区域脱离，并且可以上下滚动起来。这个滚动可以通过阻止 `touchmove` 事件的默认行为来屏蔽，但键盘刚刚弹出时，仍然会自动向上滚动那一大段距离。

更加顺理成章却又无法接受的问题是，**假如恰好页面内有不小心垂直溢出的内容的话**，当键盘收起后，进入了一个「奇怪的状态」：明明无法滚动的 `html` 区域，却显示了向下滚动一段距离后的内容（例如，底部出现大量留白），且因为 `overflow: hidden` 的作用而无法滚动回来。

> 在很多不便使用 100% 的情况下，我们会在 CSS 中使用 100vh 的的概念来代表视口高度，而这个高度在 Safari 中似乎是表示工具栏自动收起时，视口的**最大高度**，因此会导致 100vh 高度的元素很可能已经溢出了 `html` 区域。这也是这里会提到单屏 Web 应用的页面中可能会存在垂直溢出内容的主要原因。

有必要提到，如果我们在这样的「奇怪状态」下，依然认为页面是单屏不会滚动的页面，而继续使用触摸事件到屏幕/视口顶部的距离（`screenY` 或 `clientY`）来参与一些比较复杂的逻辑计算的话，会导致触摸的位置与换算到页面上需要响应的位置之间存在偏差。

## 以往的解决办法

在 iOS 13 出现之前，fixed 不可靠问题是无法解决的，除非在 Native 侧对 `WKWebView` 的 `scrollView` 做一些判断，并通过 JS API 暴露给 Web —— 但把 Web 应用的能力限制在某个特定的客户端内，是一件很不优雅的事情。

针对键盘打开时发生强制滚动且无法手动滚回的问题（**难题 2**），有三种可行的解决思路：

### 1. 主动避开键盘后再聚焦

![image](https://user-images.githubusercontent.com/5051300/75006161-c802f800-54ab-11ea-9b4d-7095c5a0a05b.png)

这是一种较为通用且简便易行的办法：在输入目标（`input` 等）发生 `touchend` 时，阻止默认行为，提前重新布局，将输入框移到不太可能被键盘遮挡的位置（当然，具体多高才不受遮挡，当时只能靠猜），然后立即调用 `focus()` 方法主动聚焦输入框。

但键盘打开后，仍然需要使用防止滚动的措施（阻止整个页面上 `touchmove` 的默认行为），来防止用户手动将页面上推。

### 2. 反向滚动

![image](https://user-images.githubusercontent.com/5051300/75005997-414e1b00-54ab-11ea-9737-398bc65075b0.png)

在键盘弹起的瞬间（`focus` 事件的下一个宏任务周期），我们可以从 `window.scrollY` 得知页面滚动的目标位置。很容易想到，此时我们可以通过 `window.scrollTo(0, 0)` 来恢复到原位置，但在实际尝试中，我们会发现，这样处理会导致页面整体向下瞬移，然后再逐渐移回到屏幕上。

这是为什么呢？我们可以用上面这张图来解释。在之前的图中我们看到了，iOS 对键盘弹出时的视口处理是浮动的，因此我们可以大胆猜测，**在键盘弹起的瞬间，视口事实上发生了瞬移。** 在页面 `window.scrollY` 变成目标值的同时，视口瞬移到页面下方同样的距离，这使得从肉眼看起来，页面依然处于原来的位置。随后，视口带着页面开始一起上移，直到再次与屏幕重合，产生了页面被强制滚动的效果，而在此过程中 `window.scrollY` 并不会逐渐变化，而是只在开始的一瞬间发生变化。因此，如果我们直接在键盘打开时执行 `window.scrollTo(0, 0)`，页面会跟随视口一同瞬移到较低的位置，然后随视口一起回到屏幕上。

换句话说，键盘打开时的强制滚动并非 `window.scrollTo` 的 `smooth` 模式，而是由 iOS Native 的滚动容器来驱动的。只要在 `focus` 的瞬间，键盘可能会遮住输入框，我们就无法阻止强制滚动的发生和进行。

![image](https://user-images.githubusercontent.com/5051300/75006883-4f516b00-54ae-11ea-922e-633aa1682d93.png)

既然我们无法阻止，我们可以用一个反向滚动的动画来抵消它。以聚焦后的 `window.scrollY` 为起点，聚焦前的 `window.scrollY`（通常为 0）为终点，构造与 iOS Spring Animation 相反的缓动曲线，用向下滚动的动画抵消向上滚动的动画，可以允许输入框在键盘弹起时被遮住，而页面只会发生轻微的抖动。

我们的目的当然不是让键盘遮住输入框，而是首先保证页面不受强制滚动的影响。因此，在执行反向滚动后，同样可以将输入框的位置移动到可视范围之内，避开键盘。

使用这种方案，同样需要配合上面所说的防止手动滚动的措施。

### 3. 收起键盘时恢复原位

上面两种方案是针对于不希望强制滚动的情况。如果可以允许键盘弹起时强制滚动，但希望键盘收起时回到原位，只需要在键盘收起的 `blur` 事件中，使用 `window.scrollTo` 让页面回到原位置即可。

## iOS 13 VisualViewport API 与新思路

昨天，我在 Google 搜索 iOS Safari 的键盘问题，已经不知道是第几次这样绝望地寻找了，直到我找到了这篇 [Safari 13, Mobile Keyboards, And The VisualViewport API.](https://tkte.ch/2019/09/23/iOS-VisualViewport.html)。文章指出，Safari 13（iOS 13）已经支持了 VisualViewport API，这是一个可以反映实际可视区域的实验性标准。根据 [MDN 页面](https://developer.mozilla.org/en-US/docs/Web/API/Visual_Viewport_API)，目前只有 IE 和 Legacy Edge 不支持这个 API。

经过测试，iOS 13 对于这个 API 支持非常完善，已经能够完全体现页面上不含键盘的可视区域所在的位置了。**可是，明明只有 iOS 8.2 不会报告键盘弹出，为何却有一个跨平台的 API 来补偿呢？其他浏览器有 `window.innerWidth`、`window.innerHeight` 和 `resize` 事件不是就足够好了吗？**

这就需要回归到本文的第一张图片来解释了：

![image](https://user-images.githubusercontent.com/5051300/74962199-69596200-544a-11ea-867e-e8db24e44f76.png)

没错，问题在于页面缩放。可以看出，当页面发生放大后，fixed 元素是不会一起移动到实际可视区域的。而且经过测试发现，Android 下的 `window.innerWidth`、`window.innerHeight` 也不会随页面放大而一起变化。反而在 iOS 下，`window.innerWidth`、`window.innerHeight` 会随着页面放大而等比例减小，虽然不会去掉键盘高度，但确实反映了显示在屏幕内的页面区域尺寸。

而 VisualViewport API 在 Android 和 iOS 两端，都完整反映了**在缩放和键盘弹出等一系列影响下，实际可视区域在页面中的位置和大小**。

因此，**VisualViewport API 对于 iOS 以外的平台，最大的意义是可以反映页面的放大区域；而对于 iOS Safari 浏览器，最大的意义是可以反映键盘的弹出。** 基于这一点，我们可以实现一个真正相对于可视区域 fixed（固定）的 `fixed` 容器。

### 实现一个 VisualViewport 组件

如何实现一个 `fixed` 容器？关于这一点，也许有一部分 Web 开发者并不知情。在 Web 开发者的直觉中，`fixed` 元素是始终相对于视口定位，没有任何一个元素能够改变它的定位方式；但事实上，问题却有些不同。

如果你曾经使用过一些性能优良的滚动容器，如 iScroll、BetterScroll、AlloyTouch 等，你可能会遇到这样一个问题：`fixed`「不灵了」，它们可能不再相对于视口定位，而是被限制在了滚动容器之内。

这是因为，在滚动容器经常会遇到的性能瓶颈中，组件的开发者通常会选择 CSS 3D Transform 来强制硬件加速，让滚动体验更顺畅。在开启了 3D Transform 的容器内，由于渲染限制，`fixed` 元素无法再相对于视口布局，而是被「圈」在了 3D Transform 容器之内。我们只需要反其道而行之，给一个容器开启 3D Transform，就可以让内部的 `fixed` 元素相对于该容器布局了。

下面我们以 React 为例，实现一个可以兼容 Android/iOS 13+，始终贴着可视区域的 VisualViewport 组件。

#### 定义 VisualViewport 类型

由于我目前使用的 TypeScript 3.7.5 还没有定义 VisualViewport API，首先我们需要手动进行类型抹平。

```tsx
interface VisualViewport extends EventTarget {
    width: number;
    height: number;
    scale: number;
    offsetTop: number;
    offsetLeft: number;
    pageTop: number;
    pageLeft: number;
}

// eslint-disable-next-line
declare global {
    interface Window {
        visualViewport?: VisualViewport;
    }
}
```

#### 定义组件

在组件中，我们对于支持 VisualViewport API 的平台使用 VisualViewport API，对于不支持的平台可以使用 `window.innerWidth`/`window.innerHeight` 进行兼容。

```tsx
import * as React from 'react';

interface VisualViewportComponentProps {
    className?: string;
    style?: React.CSSProperties;
}

interface VisualViewportComponentState {
    visualViewport: VisualViewport | null;
    windowInnerWidth: number;
    windowInnerHeight: number;
}

export default class VisualViewportComponent extends React.Component<{}, VisualViewportComponentState> {
    state: VisualViewportComponentState = {
        visualViewport: null,
        windowInnerWidth: window.innerWidth,
        windowInnerHeight: window.innerHeight,
    }

    componentDidMount() {
        // TODO: 挂载事件监听器
    }

    componentWillUnmount() {
        // TODO: 卸载事件监听器
    }

    getStyles(): React.CSSProperties {
        // TODO: 根据 state 计算样式
        return {};
    }

    render() {
        return <div className={'visual-viewport ' + this.props.className || ''} style={this.getStyles()}>
            {this.props.children}
        </div>;
    }
}
```

#### 定义事件监听器

通过监听 `window.visualViewport` 的 `resize` 和 `scroll` 事件以及 `window` 的 `resize` 事件，我们将可见视口和实际视口的尺寸变化转化为组件内的 state 变化，以便触发重渲染。

```tsx
    componentDidMount() {
        if (typeof window.visualViewport !== 'undefined') {
            window.visualViewport.addEventListener('resize', this.onVisualViewportChange);
            window.visualViewport.addEventListener('scroll', this.onVisualViewportChange);
        }
        window.addEventListener('resize', this.onResize);
    }

    componentWillUnmount() {
        if (typeof window.visualViewport !== 'undefined') {
            window.visualViewport.removeEventListener('resize', this.onVisualViewportChange);
            window.visualViewport.removeEventListener('scroll', this.onVisualViewportChange);
        }
        window.removeEventListener('resize', this.onResize);
    }

    onVisualViewportChange = (e: Event) => {
        this.setState({
            visualViewport: e.target as VisualViewport || window.visualViewport
        });
    }

    onResize = () => {
        this.setState({
            windowInnerWidth: window.innerWidth,
            windowInnerHeight: window.innerHeight
        });
    }
```

#### 计算样式

下面，我们根据 state 中提供的可见视口和实际视口尺寸，对可见视口在实际视口中的相对位置进行计算，并应用到组件容器的样式中。

```tsx
    getStyles() {
        const {
            visualViewport,
            windowInnerWidth,
            windowInnerHeight,
        } = this.state;

        // 开启 3D Transform，让 fixed 的子元素相对于容器定位
        // 同时自身也设置为 fixed，以便在非放大情况下不需要频繁移动位置
        const styles: React.CSSProperties = {
            position: 'fixed',
            transform: 'translateZ(0)',
            ...this.props.style || {}
        };

        // 支持 VisualViewport API 情况下直接计算
        if (visualViewport != null) {
            // 需要针对 iOS 越界弹性滚动的情况进行边界检查
            styles.left = Math.max(0, Math.min(
                document.documentElement.scrollWidth - visualViewport.width,
                visualViewport.offsetLeft
            )) + 'px';

            // 需要针对 iOS 越界弹性滚动的情况进行边界检查
            styles.top = Math.max(0, Math.min(
                document.documentElement.scrollHeight - visualViewport.height,
                visualViewport.offsetTop
            )) + 'px';

            styles.width = visualViewport.width + 'px';
            styles.height = visualViewport.height + 'px';
        } else {
            // 不支持 VisualViewport API 情况下（如 iOS 8~12）
            styles.top = '0';
            styles.left = '0';
            styles.width = windowInnerWidth + 'px';
            styles.height = windowInnerHeight + 'px';
        }

        return styles;
    }
```

### 效果和总结

![image](https://user-images.githubusercontent.com/5051300/75015193-fdffa680-54c2-11ea-8a93-f5204ad5d7c7.png)

经过这样的实现，我们的组件可以在支持的浏览器中正确定位到当前可见视口的位置（上图中的靛蓝色区域），并将内部的元素以可见视口为基准进行定位。对于移动端 Web 应用来说，这样的组件有很多用途，例如吸附键盘的工具栏或自动完成列表、需要避开键盘居中的对话框等等。值得一提的是，在 PC 浏览器上，这个 API 也同样适用（可以响应页面的放大）。

在 iOS 下，这样的实现还存在一些迟钝和小 bug（例如，键盘展开后的强制滚动状态下向上滑动，可以露出不论是 Viewport 还是 VisualViewport 都无法到达的白色衬底区域）。

**但至少，在 iOS 8.2 发布四年后，iOS 13 对 VisualViewport 的支持，让获取键盘高度、避开键盘、吸附键盘这三件事终于有了相对优雅的办法。**