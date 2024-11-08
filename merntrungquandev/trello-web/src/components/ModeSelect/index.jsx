// file nay luon de rfce
import { useColorScheme } from '@mui/material/styles'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'


function ModeSelect() {
  const { mode, setMode } = useColorScheme() //value la mode -> setmode
  const handleChange = (event) => {
    const selectMode = event.target.value
    setMode(selectMode)
  }

  return (
    <FormControl size="small" sx={{ minWidth: 120 }}>
      <InputLabel id="label-select-dark-light-mode" sx={{ color: 'white', '&.Mui-focused': { color: 'white' } }}>Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="label-select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
        sx={{
          color: 'white',
          '.MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          '.MuiSvgIcon-root': { color:'white' }
        }
        }


      >

        <MenuItem value='light'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LightModeIcon fontSize='small' /> Light
          </Box>
        </MenuItem>

        <MenuItem value="dark">
          <Box style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <DarkModeOutlinedIcon fontSize='small' /> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SettingsBrightnessIcon fontSize="small" /> System
          </Box>
        </MenuItem>

      </Select>
    </FormControl>
  )
}

export default ModeSelect