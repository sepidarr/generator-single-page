# Single Page Generator


## Hi guys, this repo is not under active development anymore. We have a few other projects we should take care of. If you are interested in managing it let us know by contacting info@sepidarr.ir :)

## P.S. There are six other repositories listed below related to this one that will move to your account by accepting to manage it

* [Team Layout](https://github.com/sepidarr/generator-single-page-team)
* [How It Works Layout](https://github.com/sepidarr/generator-single-page-howitworks)
* [Testimonies Layout](https://github.com/sepidarr/generator-single-page-testimonies)
* [Intro Layout](https://github.com/sepidarr/generator-single-page-intro)
* [Footer Layout](https://github.com/sepidarr/generator-single-page-footer)
* [Contact Layout](https://github.com/sepidarr/generator-single-page-contact)

--------------

*generator-single-page* is a **_Modular_** and **_Fully Customizable_** Single Page Generator tool that uses the Power of [Yeoman](http://yeoman.io/) to reduce the amount of time you will put on Designing and Building your single web pages.

## Getting Started
Assuming you have [Yeoman](http://yeoman.io/), [Grunt](http://gruntjs.com/), [Bower](http://bower.io) and all other requirements installed, you just need to run the command below, If you don't, make sure you read the [Wiki](wiki):

```sh
$ yo single-page newSinglePage && cd $_
```
Wait until the commands runs completely and you're good to go.

This will make a new directory called ` newSinglePage ` for you, Copies all the files of the project in it and automatically installs Dependencies for you.

## What Next?
Next, you might want to add other Sections to your single page.

If you are not in the `newSinglePage` directory, cd into it, then run the following command:

```sh
$ yo single-page:section
$ grunt
```

Simply choose any Section you want to add choose the layout and proceed. Notice that some sections have further configurations you can set during making process. For instance by selecting `intro` section with the `full` layout, you have to enter `Company Name`, `Title` and `Slogan`.

```sh
Give me your Company Logo Placeholder Name: "Awesome Company"
What is your title? "The Great Company!"
And your slogan? "We are going to make it happen!"
```
Each section has its own config file, available with `section/templates/<section_name>/laytous.configs.json`.

A full list of Sections, their information and How to customize your Page documentations can be found in [Wiki](http://github.com/sugarcoders/generator-single-page/wiki).

## Layouts
We have prepared a few essential layouts to start your single page application.

* [Intro](https://github.com/sepidarr/generator-single-page-intro)
* [Contact](https://github.com/sepidarr/generator-single-page-contact)
* [How It Works](https://github.com/sepidarr/generator-single-page-howitworks)
* [Team](https://github.com/sepidarr/generator-single-page-team)
* [Testimonies](https://github.com/sepidarr/generator-single-page-testimonies)
* [Footer](https://github.com/sepidarr/generator-single-page-footer)

## How It Works
[![generator-single-page](http://img.youtube.com/vi/kHFBJHHDw3I/maxresdefault.jpg)](http://www.youtube.com/watch?v=kHFBJHHDw3I)


## Contribution
We'll Appreciate your help to this Project by Forking this Repository and adding your Modules or Stylesheets. You can even help Improve Wiki. Then simply make a new Pull Request, Describe what you've done and Enjoy the Feeling of helping others.

## License
> The MIT License (MIT)
Copyright (c) 2016 Sepidar Sepehr System Sepahan (@sepidarr)

> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
