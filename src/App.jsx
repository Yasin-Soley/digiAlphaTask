import { useState } from 'react'
import CustomSelect from './components/CustomSelect'
import { GlobalStyle } from './components/styled/GlobalStyle'
import { SelectHeader } from './components/styled/select'

export default function App() {
   const [options, setOptions] = useState(['Apple', 'Banana', 'Orange'])
   const [selectedOption, setSelectedOption] = useState('')

   return (
      <>
         <GlobalStyle />
         <SelectHeader>
            {`selected: "${selectedOption}"` || 'select an option'}
         </SelectHeader>
         <CustomSelect
            options={options}
            onSelectOption={(selectedValue) => {
               console.log(selectedValue)
               setSelectedOption(selectedValue)
            }}
            onAddOption={(newOption) =>
               setOptions((prevState) => [...prevState, newOption])
            }
         />
      </>
   )
}
