/* eslint-disable react/prop-types */
import  React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
const styleM = {
  position: 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        {props.btnType == 'create' ?
         (<div>  
          <AddIcon          
           style={{background: 'black', height: '38px',
            color: 'white', width: '50px', marginTop: '-20px',position: 'fixed',}}
            />
            </div>) 
        :props.btnType == 'edit' ?  
        (<div>  <EditIcon /> </div>)        
        :('default')
        }
      
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleM}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {/* {props.showId} */}
           {props.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           {props.dynData}
          </Typography>

          <Typography>
          <Button onClick={handleClose}>Close</Button>
          </Typography>

        </Box>
      </Modal>
    </div>
  );
}