# GitHub Deploy Key 使用方法

在服务端生产环境下，我们往往需要禁止服务器对仓库的写权限，以防止敏感信息回流进入仓库。这种情况下，使用 Deploy Key 是一种最佳实践。这里以笔记的形式介绍如何在生产环境绿色无污染地使用 Deploy Key 进行部署。

## 0x00 生成并信任 Deploy Key

首先为了方便，我们给仓库想一个别名，这里比如叫 `myrepo`；

在部署端运行 `ssh-keygen` 来生成一对密钥，然后打印出它的公钥：

```bash
ssh-keygen -f ~/.ssh/deploy_key_myrepo
cat ~/.ssh/deploy_key_myrepo.pub
```

登录 GitHub 仓库设置：`https://github.com/<user>/<repo>/settings/keys`，将终端输出的公钥内容粘贴添加为新的 Deploy Key；

## 0x01 在部署端配置域名别名

在上一步中，我们生成了专门的 Key `deploy_key_myrepo`，这个 Key 只具有访问该仓库的权限，可以测试一下：

```bash
ssh -T git@github.com -i ~/.ssh/deploy_key_myrepo
```

将会输出：

```
Hi <user>/<repo>! You've successfully authenticated, but GitHub does not provide shell access.
```

下面我们利用 SSH config 文件，为该 Key 配置一个别名，以便后续访问：

```
↓ 以下是 ~/.ssh/config 配置文件 [权限 600]

Host myrepo
User git
Hostname github.com
IdentityFile ~/.ssh/deploy_key_myrepo
```

## 0x02 使用别名访问仓库

下面即可使用刚刚设置的别名 `myrepo` 来克隆该仓库：

```
git clone myrepo:/<用户名>/<仓库名>
```