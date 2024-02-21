
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Tooltip } from '@mui/material'
const MENU_STYLE = {
  bgcolor: 'white',
  color: 'primary.main',
  paddingX: '5px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}
function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      overflowX: 'auto',
      borderTop: '1px solid #2980b9',
      justifyContent: 'space-between', // tach box 1 cai trai 1  cai phai
      gap: 2,
      paddingX: 2
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip sx={MENU_STYLE} icon={<DashboardIcon />} label="QAchemistry Mern"
          //clickable
          onClick={() => { }}
        />
        <Chip sx={MENU_STYLE} icon={<VpnLockIcon />} label="Public/Private Workspace"
          //clickable
          onClick={() => { }}
        />
        <Chip sx={MENU_STYLE} icon={<AddToDriveIcon />} label="Add to Drive"
          //clickable
          onClick={() => { }}
        />
        <Chip sx={MENU_STYLE} icon={<BoltIcon />} label="Automation"
          //clickable
          onClick={() => { }}
        />
        <Chip sx={MENU_STYLE} icon={<FilterListIcon />} label="Filters"
          //clickable
          onClick={() => { }}
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button variant="outlined" endIcon={<PersonAddIcon />}>Invite </Button>
        <AvatarGroup max={4}
          sx={{
            '& .MuiAvatar-root ': {
              width: 30,
              height: 30,
              fontSize: 16
            }
          }}
        >
          <Tooltip title="Allie">
            <Avatar sx={{ width: 30, height: 30 }}
              alt='Allie'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc1Q4hzHBb4Cbmd7aF4cTXZGhao30YoiyzeQ&usqp=CAU'
            />
          </Tooltip>
          <Tooltip title="Allie">
            <Avatar sx={{ width: 30, height: 30 }}
              alt='Allie'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc1Q4hzHBb4Cbmd7aF4cTXZGhao30YoiyzeQ&usqp=CAU'
            />
          </Tooltip>
          <Tooltip title="Allie">
            <Avatar sx={{ width: 30, height: 30 }}
              alt='Allie'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc1Q4hzHBb4Cbmd7aF4cTXZGhao30YoiyzeQ&usqp=CAU'
            />
          </Tooltip>
          <Tooltip title="Allie">
            <Avatar sx={{ width: 30, height: 30 }}
              alt='Allie'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc1Q4hzHBb4Cbmd7aF4cTXZGhao30YoiyzeQ&usqp=CAU'
            />
          </Tooltip>
          <Tooltip title="Allie">
            <Avatar sx={{ width: 30, height: 30 }}
              alt='Allie'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc1Q4hzHBb4Cbmd7aF4cTXZGhao30YoiyzeQ&usqp=CAU'
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar