## Welcome to MI-FTC!  
*Last updated 8-24-23*  

|                                  Navigation                                 |  
| [Go to Home Page](http://mi-ftc.github.io/index.html) | [Springboard](http://mi-ftc.github.io/springboard/index.html) |  [Tutorials Hosted Here](http://mi-ftc.github.io/tutorial/index.html)  |

  I only realized days after setting everything up that the name *MI-FTC* could be a bit confusing. This site is not actually associated with the state of Michigan, this name is just an unhappy accident. My imaginary company is abbreviated as MI-LLC, and since I've gotten used to setting things up under that name, I named this site MI-FTC. Hopefully this disclaimer dispels any potential confusion.  *--Medium*  
  
  
Here lies a small assortment of FTC programming resources, most notably the [Springboard](http://mi-ftc.github.io/springboard/index.html).  
The [Template Page](http://mi-ftc.github.io/internal/template/temp-page.html) demonstrates how we format and lay out these pages.  
We link to other sources as much as possible, but sometimes the right material either does not exist or is not as easy to understand as we want it to be. In those situations, we create our own!  
If you want to improve something, please do! As far as I can tell, you should be able to check out the repo and make a pull request. I haven't quite figured out how these GitHub organizations work yet, so if it's broken, I'm sorry.  
If you find something wrong, please offer a novel, an opinion, or a novel opinion in the Issues section.  
We have just added rudimentary support for [theming](http://mi-ftc.github.io/thememan.html). *It's not done yet*, but we're working on it! If you don't set a theme or just set the default theme, things should mostly work as normal.
No part of the site itself is written in Java, but GitHub has picked up on the OpMode templates.  
  
A random note for developers: If you clone the repo, change the stylesheet, then load the page only to find that the style has not updated, one or both of two things has gone wrong:
- The browser cached the style, and you need to clear the page cache (Shift+Refresh, Shift+Ctrl+R on Firefox).
- The page you're loading uses an absolute link to the file (https://mi-ftc.github.io/...), so is receiving the deployed version of the file rather than the local version.
