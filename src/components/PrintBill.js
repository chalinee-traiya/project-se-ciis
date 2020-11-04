import React from 'react'
import Printer, { print } from 'react-pdf-print'


const ids = ['1']

function PrintBill() {
    return (
        <>
        <Printer>
            <div id={ids[0]} style={{ width:'210mm', height: '297mm' }}>
                Hello World!
            </div>
        </Printer>
        <input type='button' style={{ position: 'relative', float: 'right' }}
          onClick={() => print(ids)} value='Stampa' />
            
        </>
    )
}

export default PrintBill
