# Latency Tester
a basic version for showcasing

[cc](https://github.com/paharisakar/Test-your-reaction-time)

## Tutorial

If you are interested in making a simple website with **html and JavaScript** for your project, you can choose to host your website on GitHub pages, which is where this website is hosted now. It is free and easy to set up as long as **you have a GitHub account**. If your project includes some extensive backend then this is not applicable. 

1. Create a repository on GitHub

    First of all, you should [create a new repository](https://github.com/new) on GitHub named ***username*.github.io**, and replace *username* with your own username on GitHub. 

2. Clone the repository locally

    You should clone the repo from GitHub to your computer via either **a terminal** with the following command: 
    ```
    $ git clone https://github.com/username/username.github.io
    ```
    and of course with the *username* part changed to your own one. You can also use the GitHub Desktop application if you prefer. 

3. Add files to the repo

    You can add whatever content you would like in the repo. For example, you can create an `index.html` file with the following content:

    ```
    <!doctype html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Home</title>
    </head>
    <body>
        <h1>Hello World!</h1>
    </body>
    </html>
    ```
    
    GitHub pages is a static site hosting service built with [Jekyll](https://jekyllrb.com/), so check it out if you want to know more about it or [Github Pages](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages)

4. Publish

    The last step is to add, commit and push to the remote repository, so in the terminal, you can type:
    ```
    $ git add -all 
    $ git commit -m "your commit message"
    $ git push -u origin main
    ```
    And then you can check **https://*username*.github.io** out to see the changes. 