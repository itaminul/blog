export const template = {
    mobile: {
      rows: "56px auto 56px 56px",
      columns: "auto",
      area: ` 
     "header "
     "main"
     "sidebar"   
     "footer"  
     `
    },
    tablet: {
      rows: "10% auto auto 10%",
      columns: "10% auto auto auto",
      area: ` 
     "sidebar header header header"
     "sidebar main main main"
     "sidebar main main main"
     "sidebar footer footer footer"  
     `
    },
    desktop: {
      rows: "10% auto 10%",
      columns: "10% auto auto auto auto",
      area: ` 
     "sidebar header header header header"
     "sidebar main main main aside"
     "sidebar footer footer footer footer"  
     `
    }
  };
  