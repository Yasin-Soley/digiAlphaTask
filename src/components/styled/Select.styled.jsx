import styled from 'styled-components'

const SelectContainer = styled.div`
   position: relative;
   width: 400px;
   margin: 5rem auto;
`

const SelectHeader = styled.h2`
   text-align: center;
   margin: 5rem 0;
`

const SelectInputWrapper = styled.div`
   position: relative;
`

const SelectInputField = styled.input`
   width: 100%;
   padding: 0.6rem 1.5rem;
   outline: none;
   border: 1px solid #e2e2e2;
   border-radius: 5px 5px 0 0;
   cursor: pointer;
   font-size: 1rem;
`

const DropdownList = styled.div`
   width: 100%;
   position: absolute;
   top: 100%;
   left: 0;
   border: 1px solid #e2e2e2;
   border-radius: 0 0 5px 5px;
   border-top: none;
   background-color: #fff;
`

const DropdownItem = styled.div`
   padding: 0.5rem 1.5rem;
   cursor: pointer;

   &:hover {
      background-color: #f0f0f0;
   }
`

const SelectInputIcon = styled.div`
   position: absolute;
   z-index: 100;
   top: 50%;
   right: 10px;
   transform: translateY(-50%);

   display: flex;
   height: 100%;
   justify-content: center;
   align-items: center;
   gap: 15px;
   color: #6a6a6a;

   .vertical-line {
      width: 1px;
      height: 60%;
      border-radius: 10px;
      background-color: #8a8a8a;
   }

   svg {
      cursor: pointer;
   }

   button {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 0.2rem 0.5rem;
      font-size: 0.8rem;
   }
`

export {
   SelectContainer,
   SelectHeader,
   SelectInputWrapper,
   SelectInputField,
   DropdownList,
   DropdownItem,
   SelectInputIcon,
}
