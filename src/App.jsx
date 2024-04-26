import { useEffect, useState } from 'react'
import CustomSelect from './components/CustomSelect'
import { GlobalStyle } from './components/styled/GlobalStyle'
import { SelectHeader } from './components/styled/Select.styled'

const OPTIONS = [
   { label: 'BMW', value: 'bmw' },
   { label: 'TOYOTA', value: 'toyota' },
   { label: 'MAZDA', value: 'mazda' },
]

export default function App() {
   const [options, setOptions] = useState(OPTIONS)
   const [selectedOption, setSelectedOption] = useState('')

   useEffect(() => {
      window.addEventListener('click', (event) => {
         console.log(event)
      })
      return () => {
         return window.removeEventListener('click', (event) => {
            console.log(event)
         })
      }
   })

   const headerText =
      selectedOption.trim() === ''
         ? 'select an option'
         : `selected: "${selectedOption}"`

   const handleAddOption = (newOption) => {
      setOptions((prevState) => [
         ...prevState,
         {
            label: newOption.toUpperCase(),
            value: newOption.toLowerCase(),
         },
      ])
   }

   const handleSelectOption = (selectedOption) => {
      console.log(selectedOption)
      setSelectedOption(selectedOption)
   }

   useEffect(() => {
      console.log(options)
   }, [options])

   return (
      <>
         <GlobalStyle />
         <SelectHeader>{headerText}</SelectHeader>
         <CustomSelect
            options={options}
            onSelectOption={handleSelectOption}
            onAddOption={handleAddOption}
            selectedOption={selectedOption}
         />
      </>
   )
}
