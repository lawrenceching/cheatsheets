---
title: tmux
description:
---


#### Sessions
```bash
# 创建新 Session
tmux new 
# 创建指定名称的新 Session
tmux new -s session_name
# 绑定到默认 Session
tmux attach
# 绑定到指定 Session
tmux a
tmux at
tmux attach -t session_name
# 切换到指定 Session
tmux switch -t session_name
# 列举 Session
tmux ls
tmux list-sessions
# 解绑 Session
tmux detach
# 删除指定 Session
tmux kill-ses -t mysession
tmux kill-session -t mysession
# 删除所有 Session
tmux kill-session -a
# 删除了 mysession 意外的所有 Session
tmux kill-session -a -t mysession
```

#### Windows

```bash
tmux new-window
tmux new -s mysession -n mywindow
Ctrl+b c
Ctrl+b ,
Ctrl+b &
Ctrl+b p
Ctrl+b b
Ctrl+b n
Ctrl+b 0..9
```

### Panes
```
    Ctrl+b %       # vert
    Ctrl+b "       # horiz
    Ctrl+b hkjl    # navigation
    Ctrl+b HJKL    # resize
    Ctrl+b o       # next window
    Ctrl+b q       # show pane numbers
    Ctrl+b q 0...9 # show pane numbers
    Ctrl+b x       # close pane
    Ctrl+b z       
    Ctrl+b !       
    Ctrl+b ;
    Ctrl+b %
    Ctrl+b "
    Ctrl+b {
    Ctrl+b }
    Ctrl+b Up
    Ctrl+b Down
    Ctrl+b Left
    Ctrl+b Right
    Ctrl+b+Up
    Ctrl+b Ctrl+Up
    Ctrl+b Down
    Ctrl+b Ctrl+Down
    Ctrl+b+Left
    Ctrl+b Ctrl+Left
    Ctrl+b+Right
    Ctrl+b Ctrl+Right


    Ctrl+b { or }  # move windows around
```


### Help
```
    Ctrl+b ?
```
### Scrolling
```
    Ctrl+b [       # Enter scroll mode then press up and down
```
### Copy/paste
```
    Ctrl+b [       # 1. Enter scroll mode first.
    Space       # 2. Start selecting and move around.
    Enter       # 3. Press enter to copy.
    Ctrl+b ]       # Paste
```

### Detach/attach

    Ctrl+b d       # Detach
    Ctrl+b ( )     # Switch through sessions
    $ tmux attach

### Niceties

    Ctrl+b t    # Time

## Status formats

```
setw -g window-status-format `#[fg=8,bg=default]#I`
```

See `message-command-style` in the man page.

### Attribute/colors

| `#[fg=1]` | standard color |
| `#[fg=yellow]` | yellow |
| `#[bold]` | bold |
| `#[fg=colour240]` | 256 color |
| `#[fg=default]` | default |
| `#[fg=1,bg=2]` | combinations |
| `#[default]` | reset |

### Colors

 * `black` `red` `green` `yellow` `blue` `magenta` `cyan` `white`
 * `brightred` (and so on)
 * `colour0` ... `colour255`
 * `#333` (rgb hex)

### Attributes

 * `bold` `underscore` `blink` `noreverse` `hidden` `dim` `italics`

### Variables
```
| `#(date)` | shell command |
| `#I` | window index |
| `#S` | session name |
| `#W` | window name |
| `#F` | window flags |
| `#H` | Hostname |
| `#h` | Hostname, short |
| `#D` | pane id |
| `#P` | pane index |
| `#T` | pane title |
```

## Options

```
set -g status-justify [left|centre|right]
set -g status-left '...'
setw -g window-status-style
setw -g window-status-activity-style
setw -g window-status-bell-style
setw -g window-status-content-style
setw -g window-status-current-style
setw -g window-status-last-style
setw -g window-status-format
setw -g window-status-current-format
setw -g window-status-separator
```

## References

https://tmuxcheatsheet.com/

https://devhints.io/tmux
