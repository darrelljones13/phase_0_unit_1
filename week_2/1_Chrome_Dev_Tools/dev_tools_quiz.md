#### Include an inline screenshot of your codeschool's points from the profile page:

Chrome Devtools points as of 4-29-14
http://postimg.org/image/x83c2cgd7/

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
    The Elements and Sources tabs.
  * Javascript Debugging
    Use the Console to call up a specific event and use Source tab to make the changes.
  * Performance Optimization 
    Use the Network tab.
* What's the quick key for your OS to spawn the Dev Tools inspector?
  Command + Option + I

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
    #0b0f11
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)
    DJ postmachina edits:  http://postimg.org/image/43ed4657f/

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.
  That text is part of an image file: ../images/home_bg.gif. It is not considered text when it is an image.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.
    http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png
    The file size is 316KB.
    I was able to find out this information by bringing up the Network tab in Chrome DevTools.  From there, I was able to sort the page elements by size.

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?
  PageSpeed Insights suggests optimizing images to improve speed. It could save 79.2KiB alone by optimizing this image: http://www.ticketswizard.com/App_Themes/PXS_Demo/Images/sbx.png
  The overall speed issue is tied directly to image size.  PageSpeed Insights suggests reducing all images by 39%.
