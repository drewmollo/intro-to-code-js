# intro-to-code-js

Below is a collection of Javascript problems aimed at beginners to test their understanding as they learn.

## How to run

This repo assumes you have git, node and a code editor of your choosing ready to go.

If not, there are plenty of guides to setting these up on your OS (Windows, Mac, Linux) available on Youtube.
## How to Fork and Run This Repo

### Forking

1. Fork repo
2. Click the green 'Download Code' button
3. Copy that address
4. Open a terminal window
5. Navigate to your Programming folder
6. Input: `git clone copied-address-pasted-here`
7. Jump into that folder
8. Check the current git repo remote using: `git remote -v`
9. Head back to original repo.
10. Copy THAT clone repo http address.
11. Back to terminal.
12. Add a remote with my repo info: `git remote add chris chris-repo-address-here`
13. Check that the new git remote is added: `git remote -v`

### Accessing Branches and Installing

1. Change to branch of first unit: `git checkout 01-Values-Types`
2. Install repo dependencies: `npm install`
3. After the install, in your code editor, open the file `package.json`
4. You'll see under the scripts section the test command for that section and any others if you're further along than the first.
5. In VSCode terminal, run the first test suite: `npm run test-01`

### Running your first test

### Saving your progress by committing your work

1. Make sure all your files are saved.
2. In a terminal, stage your files to commit: `git add .`
3. You can check the status of your staged/untracked files using: `git status`
  1. If added correctly, you should see `Changes to be committed:`, listing all the files you've staged so far.
4. Commit your files to your fork with a message: `git commit -m ''`
  1. You can check to see your commits again with `git status`
5. To push this commit to your repo, `git push origin`
6. Open your web browser to your repo and refresh the page. You should
