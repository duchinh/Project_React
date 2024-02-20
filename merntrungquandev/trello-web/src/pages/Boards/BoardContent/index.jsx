
import Box from '@mui/material/Box'
function BoardContent() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => `calc(100vh - ${theme.trello.boardBarHeight} - ${theme.trello.appBarHeight})`,
      backgroundColor: 'primary.main',
      display: 'flex',
      alignItems: 'center'
    }}>
      Board Content
    </Box>
  )
}

export default BoardContent