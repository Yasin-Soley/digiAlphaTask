/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react'
import {
   DropdownItem,
   DropdownList,
   SelectContainer,
   SelectInputField,
   SelectInputIcon,
   SelectInputWrapper,
} from './styled/select'
import { FaAngleDown, FaAngleUp, FaPlus } from 'react-icons/fa6'

export default function CustomSelect({ options, onSelectOption, onAddOption }) {
   const [inputValue, setInputValue] = useState('')
   const [filteredOptions, setFilteredOptions] = useState(options)
   const [isOpen, setIsOpen] = useState(false)

   const inputRef = useRef(null)

   const handleInputChange = (e) => {
      setInputValue(e.target.value)
   }

   useEffect(() => {
      if (inputValue.toLowerCase().trim() === '') {
         setFilteredOptions(options)
      } else {
         const filtered = options.filter((option) =>
            option.toLowerCase().includes(inputValue.toLowerCase())
         )

         setFilteredOptions(filtered)
      }
   }, [inputValue, options])

   const handleSelectOption = (option) => {
      console.log('option:', option)
      onSelectOption(option)
      setInputValue(option)
   }

   const handleKeyPress = (e) => {
      if (e.key === 'Enter' && inputValue.trim() !== '') {
         onAddOption(inputValue)
         setInputValue('')
         setIsOpen(true)
      }
   }

   const handleInputFocus = () => {
      setIsOpen(true)
   }

   const handleInputBlur = () => {
      setTimeout(() => setIsOpen(false), 100)
   }

   let optionNotFound = inputValue && !filteredOptions.includes(inputValue)

   return (
      <SelectContainer>
         <SelectInputWrapper>
            <SelectInputField
               ref={inputRef}
               type='text'
               value={inputValue}
               onChange={handleInputChange}
               onFocus={handleInputFocus}
               onBlur={handleInputBlur}
               onKeyDown={handleKeyPress}
               placeholder='select, search, or add option...'
            />
            <SelectInputIcon>
               {optionNotFound && (
                  <button
                     onClick={() => {
                        onAddOption(inputValue)
                        setInputValue('')
                        setIsOpen(true)
                     }}>
                     Add <FaPlus />
                  </button>
               )}
               <div className='vertical-line' />
               {isOpen ? (
                  <FaAngleUp onClick={() => setIsOpen(false)} />
               ) : (
                  <FaAngleDown
                     onClick={() => {
                        setIsOpen(true)
                        inputRef.current.focus()
                     }}
                  />
               )}
            </SelectInputIcon>
         </SelectInputWrapper>
         {isOpen && (
            <DropdownList>
               {filteredOptions.map((option, index) => (
                  <DropdownItem
                     key={index}
                     onClick={() => handleSelectOption(option)}>
                     {option}
                  </DropdownItem>
               ))}
            </DropdownList>
         )}
      </SelectContainer>
   )
}
