#### Sunday, Sept. 26:
  - Met via zoom for 1 hour to discuss progress and goals for upcoming week
  - Resolved current git Issues and created new ones to better address remaining tasks
  - Set deadline for tasks to ensure everything can be cleaned up before due date

#### Class on Tuesday (9/21):
*What we learned:*
  - Using the slot tag to improve progressive enhancement
  - How to prevent tabbing to link and button with tabindex
  - How to create replicants of the button in index.html and changing the text/link with <slot> tags

  *Plans going forward:*
  - Add in dark mode/high contrast accessibility
  - Improve responsiveness on resize (button text moves at incredibly large scales)
  - Get more comfortable with using shadowRoot


#### Thursday, Sept. 16:
- During class, we decided that we would take the weekend to each make an attempt to build a simple button using the open-wc framework.
    - This button would have some of the CSS that our model button had, allowing us to critique each other's designs.
- In class, we also created a GitHub repo and two branches so we would work individually then merge our code together later on.

#### Monday, Sept. 20:
- We met to look over one another's code and gauge progress.
- Following our code review, we both pushed our code to our branches and merged our changes based on what we felt works best going forward.

#### *Individual Contributions*
- Ashad: Have all button attributes ready to go; currently adding css to view the button.
- Drew: Create a hyperlinked button that has responsive resizing and css properties set up.
  
 #### Tuesday, Sept. 28:
  Paired Group: [dld-btn](https://github.com/IST402/btnproject1/tree/main/dld-btn)
  
  *Similarities:*
  - Both buttons can be tabbed to.
  - Both button have a :hover feature
  
  *Differences:*
  - Dld-btn's links are entered in the index.html rather than being in the properties and constructor.
  - When the button is clicked on, there is a dropdown menu to download the different OS versions of VSCode--our button links to a website instead.
  
  *One piece of code we will be utilizing (allows esc key to unfocus from button):*
  ```
  keyPress (e) { console.log(e)
    if(e.key === "Escape") {
      this._toggleDropdown(e)
    }
  }
  ```

