/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react'
import {
   DropdownItem,
   DropdownList,
   SelectContainer,
   SelectInputField,
   SelectInputIcon,
   SelectInputWrapper,
} from './styled/Select.styled'
import { FaAngleDown, FaAngleUp, FaPlus } from 'react-icons/fa6'

export default function CustomSelect({
   options,
   onSelectOption,
   onAddOption,
   selectedOption,
}) {
   const [inputValue, setInputValue] = useState('')
   const [filteredOptions, setFilteredOptions] = useState(options)
   const [isOpen, setIsOpen] = useState(false)

   const inputRef = useRef(null)

   useEffect(() => {
      if (inputValue.trim() === '' || selectedOption === inputValue) {
         setFilteredOptions(options)
      } else {
         const filtered = options.filter((option) =>
            option.value.includes(inputValue.toLowerCase())
         )

         console.log(filtered, options, inputValue)

         if (filtered.length === 0) {
            setFilteredOptions([
               {
                  label: `Press Enter to add ${inputValue}`,
                  value: 'toBeAdded',
               },
            ])
         } else {
            setFilteredOptions(filtered)
         }
      }
   }, [inputValue, options, selectedOption, isOpen])

   const handleInputChange = (e) => {
      setInputValue(e.target.value)
   }

   const handleSelectOption = (option) => {
      console.log('option:', option)
      onSelectOption(option.label)
      setInputValue(option.label)
   }

   const handleKeyDown = (e) => {
      if (e.key === 'Enter' && inputValue.trim() !== '') {
         onAddOption(inputValue)
         setInputValue('')
         setIsOpen(true)
      }
   }

   const handleAddButtonClicked = () => {
      inputRef.current.focus()
      onAddOption(inputValue)
      setInputValue('')
      setIsOpen(true)
   }

   const handleInputFocus = () => {
      setIsOpen(true)
   }

   const handleInputBlur = () => {
      setTimeout(() => setIsOpen(false), 100)
   }

   let optionNotFound =
      inputValue && !options.some((option) => option.label === inputValue)

   return (
      <SelectContainer>
         <SelectInputWrapper $focused={isOpen}>
            <SelectInputField
               ref={inputRef}
               type='text'
               value={inputValue}
               onChange={handleInputChange}
               onFocus={handleInputFocus}
               onBlur={handleInputBlur}
               onKeyDown={handleKeyDown}
               placeholder='select, search, or add option...'
            />
            <SelectInputIcon>
               {optionNotFound && (
                  <button type='button' onClick={handleAddButtonClicked}>
                     Add <FaPlus />
                  </button>
               )}
               <div className='vertical-line' />
               {isOpen ? (
                  <FaAngleUp onClick={handleInputBlur} />
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
                     onClick={
                        option.value !== 'toBeAdded'
                           ? handleSelectOption.bind(null, option)
                           : () => {}
                     }>
                     {option.label}
                  </DropdownItem>
               ))}
            </DropdownList>
         )}
      </SelectContainer>
   )
}
