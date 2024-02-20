
import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import Typography from '@mui/material/Typography'
import { useColorScheme, } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Container from '@mui/material/Container'
function App() {
  function ModeSelect() {
    const { mode, setMode } = useColorScheme() //value la mode -> setmode 
    const handleChange = (event) => {
      const selectMode = event.target.value
      setMode(selectMode)
    }

    return (
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
        <Select
          labelId="label-select-dark-light-mode"
          id="label-select-dark-light-mode"
          value={mode}
          label="Mode"
          onChange={handleChange}
        >

          <MenuItem value='light'>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LightModeIcon fontSize='small' /> Light
            </Box>
          </MenuItem>

          <MenuItem value="dark">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <DarkModeOutlinedIcon fontSize='small' /> Dark
            </div>
          </MenuItem>
          <MenuItem value="system">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <SettingsBrightnessIcon fontSize="small" /> System
            </div>
          </MenuItem>

        </Select>
      </FormControl>
    )
  }


  return (
    // boc lai App vao 1 container , disableGutters maxWidth={false}: bao container toan man hinh
    <Container disableGutters maxWidth={false} sx={{ height: '100vh', backgroundColor: 'primary.main' }}>
      <Box sx={{
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        backgroundColor: 'primary.light',
        display: 'flex',
        alignItems: 'center'
      }}>
        <ModeSelect />
      </Box>
      <Box sx={{
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        backgroundColor: 'primary.dark',
        display: 'flex',
        alignItems: 'center'
      }}>
        Board bar
      </Box>
      <Box sx={{
        width: '100%',
        height: (theme) => `calc(100vh - ${theme.trello.boardBarHeight} - ${theme.trello.appBarHeight})`,
        backgroundColor: 'primary.main',
        display: 'flex',
        alignItems: 'center'
      }}>
        Board Content
      </Box>
    </Container>
  )
}

export default App
