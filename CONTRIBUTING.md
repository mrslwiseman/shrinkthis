# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change. 

Please note we have a code of conduct, please follow it in all your interactions with the project.

## Making contributions

If there is a particular issue you want to fix, communicate your intention via the comments on the specific issue. This will ensure that you are not working on something someone else is close to finishing, and also gives you the opportunity to discuss your approach and get any help or advice you may need before starting.

If the bug or feature you wish to work on is not yet in the existing issues, add it to the issues thread first and comment regarding your intention to work on it straight away.

Aside from that, stick to the fork-pull workflow outlined below.

## Getting started

+ Fork this repo before making any changes - you will be initially pushing commits to **your fork**, not this repo.  

+ Create issues on **this** repo, not your fork, if you encounter bugs, non-ideal behaviour/css, or wish to request features.

## How to PR (pull request)

+ On your forked verision of the repo on GitHub, click the green 'clone or download' button and copy the link.
  + The link will look something like this: `https://github.com/mrslwiseman/shrinkthis.git` (but with your username, not mine)
+ In the terminal write the following command to clone the repo. This will give you a local copy to work on:
  + `git clone <paste-the-link-of-your-repo.git-here>`
  + eg: `git clone https://github.com/mrslwiseman/shrinkthis.git`
+ In your terminal navigate to the folder that was just created.
  + The command for this is `cd`
  + eg: `cd shrinkthis`
+ If your version of the repo is ever out of sync with the original repo, i.e. there are new commits on the master branch of the original that you don't have, you need to sync your repo before adding your contributions. **See below, in the section called 'How to sync your local repo with the original repo' for details**
+ **Create a new branch to work on** (you'll do this for your real contributions, too).
  + At the terminal, in the correct folder, run `git checkout -b <new-branch-name>`
  + `<new-branch-name>` should be replaced with something sensible, like `feature-login-form` or `fix-login-bug`
  + All together, an example: `git checkout -b feature-login-form`
+ Make the changes to the appropriate files.
+ Push your change to your fork:
  + `git push origin <your-branch-name>`
+ Open a pull request. Follow the guide here: [Creating a pull request from a fork](https://help.github.com/articles/creating-a-pull-request-from-a-fork/)
  + @mention anyone you specifically want to review your PR
+ From there, a reviewer will go through the rest of the process with you.
  + You may be required to make changes to your code before it gets pulled in to the master branch - have patience and know that the difficult bits are done.

+ Now you can delete your local and remote branches:
  + switch to `master` branch:  
    `git checkout master`
  + list all branches:  
    `git branch`  
    you should see `* master` and the second branch you created previously
  + now delete that second branch:  
    `git branch -D <name-of-the-branch>`
  + delete second branch from your GitHub:  
    `git push origin --delete <name-of-the-branch>`

## How to sync your local repo with the original repo

+ This setup should be done only once for the repo.  
  [source](https://help.github.com/articles/configuring-a-remote-for-a-fork/)  
  + List the current configured remote repository for your fork:  
    `git remote -v`  
    You should see two links with `origin` in front of them.  
    The links will begin either with `https` or `git@`
  + Specify a new remote upstream repository that will be synced with the fork:  
    `git remote add upstream https://github.com/mrslwiseman/shrinkthis.git`  
    or  
    `git remote add upstream git@github.com:mrslwiseman/shrinkthis.git`  
    depending on which protocol you saw in the first step.
  + Verify the new upstream repository you've specified for your fork:  
    `git remote -v`  
    now you should see four links: two `origin` and two `upstream`  


+ This should be done to check for updates on the remote repo:  
  [source](https://help.github.com/articles/syncing-a-fork/)
  + Get data from original repo:  
    `git fetch upstream`  
  + Switch to the `master` branch of your local repo:  
    `git checkout master`
  + Merge changes from the original repo into your local `master` branch:  
    `git merge upstream/master`
  + Now push changes to your GitHub repo:  
    `git push`

Now your local repo and your GitHub repo is up to date with the original repo you forked from.

### Important
Please keep your commits and pull requests focused purely on the objectives discussed in your communications with the team. If you find _other minor bugs_, _typos_ or _whitespace issues_ while working on your feature / fix, rather than fixing them, please open a **new issue** and **leave it out of your current contribution**. Reviewing Pull Requests and comparing diffs will be much easier that way!

## Code of Conduct

### Our Pledge

In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to making participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, gender identity and expression, level of experience,
nationality, personal appearance, race, religion, or sexual identity and
orientation.

### Our Standards

Examples of behavior that contributes to creating a positive environment
include:

* Using welcoming and inclusive language
* Being respectful of differing viewpoints and experiences
* Gracefully accepting constructive criticism
* Focusing on what is best for the community
* Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

* The use of sexualized language or imagery and unwelcome sexual attention or
advances
* Trolling, insulting/derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or electronic
  address, without explicit permission
* Other conduct which could reasonably be considered inappropriate in a
  professional setting

### Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable
behavior and are expected to take appropriate and fair corrective action in
response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or
reject comments, commits, code, wiki edits, issues, and other contributions
that are not aligned to this Code of Conduct, or to ban temporarily or
permanently any contributor for other behaviors that they deem inappropriate,
threatening, offensive, or harmful.

### Scope

This Code of Conduct applies both within project spaces and in public spaces
when an individual is representing the project or its community. Examples of
representing a project or community include using an official project e-mail
address, posting via an official social media account, or acting as an appointed
representative at an online or offline event. Representation of a project may be
further defined and clarified by project maintainers.

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported by contacting the project team at [INSERT EMAIL ADDRESS]. All
complaints will be reviewed and investigated and will result in a response that
is deemed necessary and appropriate to the circumstances. The project team is
obligated to maintain confidentiality with regard to the reporter of an incident.
Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good
faith may face temporary or permanent repercussions as determined by other
members of the project's leadership.

### Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage], version 1.4,
available at [http://contributor-covenant.org/version/1/4][version]

[homepage]: http://contributor-covenant.org
[version]: http://contributor-covenant.org/version/1/4/

## Any questions?

Could this CONTRIBUTING file be improved? Was anything inaccurate or unclear? Please open up an issue and suggest appropriate fixes. Good documentation is just as crucial as good code - so documentation contributions are just as valued as fancy code contributions!