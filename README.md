# Landing Page Generator
*generator-landing-page* is a **_Modular_** and **_Fully Customizable_** Landing Page generator tool that uses the Power of [Yeoman](http://yeoman.io/) to reduce the amount of time you will put on Designing and Building your Landing pages.

## Getting Started
Assuming you have [Yeoman](http://yeoman.io/), [Grunt](http://gruntjs.com/), [Bower](http://bower.io) and all other requirements installed, you just need to run the command below, If you don't, make sure you read the [Wiki](https://github.com/sadrzadehsina/generator-landing-page/wiki):

```sh
$ yo landing-page newLandingPage
```
Answer questions, Wait until the command runs completely and you're good to go.

This will make a new directory called ` newLandingPage ` for you, Copies all the files of the project in it and automatically installs Dependencies for you.

After generating the project, All you need to do is:

```sh
$ cd newLandingPage
$ grunt
```
And your Landing Page is Ready to use in the `Build` Folder.

## What Next?
Next, you might want to add other Sections to your landing page.

You can easily do that by running below command:

```sh
$ yo landing-page:section <section_name>
$ grunt
```

i.e.

```sh
$ yo landing-page:section about
$ grunt
```

A full list of Sections, their information and How to customize your Landing Page documentations can be found in [Wiki](https://github.com/sadrzadehsina/generator-landing-page/wiki) .

## Contribution
We'll Appreciate your help to this Project by Forking this Repository and adding your Modules or Stylesheets. You can even help Improve Wiki. Then simply make a new Pull Request, Describe what you have done and Enjoy the Feeling of helping others.

## License
> The MIT License (MIT)
Copyright (c) 2016 Sina Sadrzadeh (@sadrzadehsina) & Masoud Mirzaei (@mamos98)

> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
