
export default function ErrorMessage({children}) {
    return <>
    
      <div 
        style={{
         width: "100%",
         padding: 10,
         marginBottom: 10,
         borderRadius: 4,
         backgroundColor:'rgb(176, 6, 6)',
         textAlign: 'center',
         color: 'white',
         textTransform: 'capitalize'

        }}
      
      >
        {children}

      </div>
    
    </>
}