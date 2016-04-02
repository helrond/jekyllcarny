# jekyllcarny

A basic [Jekyll](http://jekyllrb.com/) implementation of [New England Carnegies](http://necarnegies.com/).

## Setup

### Clone repository

Clone the repository `git clone git@github.com:jessamynwest/jekyllcarny.git`

This will download the repository to a `jekyllcarny` directory, and will automatically create a link to the Github repository with the short name `origin`.

### Install Jekyll

Detailed instructions for installing Jekyll are available via the [official documentation](https://jekyllrb.com/docs/installation/).

### Install Grunt.js and configure tasks

This repo comes packages with some [Grunt.js](http://gruntjs.com/) tasks to help automate deployment. In order to take advantage of these, you'll need to [install npm (Node.js package manager)](https://docs.npmjs.com/getting-started/installing-node) as well as [Grunt](http://gruntjs.com/getting-started).

Once you've done that, edit the server name (line 57) and target directory on the remote server (line 61) in `Gruntfile.js`

## Making changes

### Edit files

`git pull`

Use your favorite text editor to make desired changes to content. Use `grunt preview` to get Jekyll to spin up a local webserver at `http://localhost:4000` with a preview of what your site will look like.

### Deploy, the short way

When you're happy with the changes, run `grunt deploy` to build the site, FTP the build to the remote server, and then commit the changes to Github. You'll be prompted for the username and password for the remote server.

### Deploy, the long way

Alternatively, you can do each of those steps individually

#### Build site

Once you're done making changes, you'll build the site using Jekyll.

In a command prompt/terminal, navigate to the root directory of this repository and then run `jekyll build`. Jekyll will build the site in the `_site` directory.

If you want to preview the site locally, you can do so by running `jekyll serve`. You can then preview the site by pointing your browser to [http://localhost:4000](http://localhost:4000).

#### Upload site

To update the site, simply FTP the `_site` directory to your web host.

#### Commit and push changes

Finally, commit and push the Jekyll site to Github.

*   Add all changed files using `git add .`
*   Commit these changes using `git commit -m "your commit message"`
*   Then push this commit to Github with `git push origin master`
