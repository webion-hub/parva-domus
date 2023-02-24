import { useNextNavigator } from "@/lib/useNextNavigator"
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer } from "@mui/material"
import { create } from "zustand"
import { links } from "../../lib/layoutLinks"

interface SidebarState {
  isOpen: boolean,
  open: () => void,
  close: () => void,
  toggle: () => void,
}

export const useSidebar = create<SidebarState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  toggle: () => set(state => ({isOpen: !state.isOpen})),
}))

export function ParvaSidebar() {
  const { close, open, isOpen } = useSidebar()
  const { clickNavigate } = useNextNavigator()

  return (
    <SwipeableDrawer
      anchor="right"
      open={isOpen}
      onClose={close}
      onOpen={open}
      PaperProps={{ sx: { borderRadius: 0 } }}
    >
      <List>
        {links.map((link, index) => (
          <ListItem
            key={index} 
            disablePadding
          >
            <ListItemButton
              href={link.href}
              onClick={(e) => {
                clickNavigate(link.href)(e)
                close()
              }}
            >
              <ListItemIcon>
                {link.icon}
              </ListItemIcon>
              <ListItemText 
                primary={link.label} 
              />
            </ListItemButton>
          </ListItem>
        ))} 
      </List>
    </SwipeableDrawer>
  )
}