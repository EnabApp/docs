---
title: ToolTips
description: ToolTips component, best way to put it is that the tooltip is the greatest when trying to show a name of a Button or an Icon that doesn't have a label , it is used to show a message when the user hovers over an element.
---

# Attributes

## Text

Text variable which contains the text of the tooltip. E.g. 'This is a button', 'Hello', ...

- `text`{color="error"}
  - Type: `String`{color="warning"}
  - requierd: `true`{color="primary"}

```html
<!-- Code Preview "Text" -->
<UiToolTip text="ToolTip!">
  <UiButton color="error">Hover Me</UiButton>
</UiToolTip>
```

## Position

Position variable which contains the position of the tooltip. E.g. 'top', 'bottom', ...

- `position`{color="error"}
  - Type: `String`{color="warning"}
  - default: `top`{color="primary"}

```html
<!-- Code Preview "Position" -->
<!-- Yes you can use Top, Bottom, right and left -->
<UiToolTip text="it's Works!" position="bottom">
  <UiButton color="success">Hover Me</UiButton>
</UiToolTip>
```
