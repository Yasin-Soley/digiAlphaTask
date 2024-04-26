import styled from 'styled-components'

const SelectContainer = styled.div`
   position: relative;
   width: 500px;
   margin: 5rem auto;
`

const SelectHeader = styled.h2`
   text-align: center;
   margin: 5rem 0;
`

const SelectInputWrapper = styled.div`
   display: flex;
   position: relative;
   border: 1px solid ${(props) => (props.$focused ? 'Blue' : '#e2e2e2')};
   border-radius: 5px 5px 0 0;
   padding: 0.6rem 0.5rem 0.6rem 1.5rem;
`

const SelectInputField = styled.input`
   width: 80%;
   outline: none;
   border: none;
   border-radius: 5px 5px 0 0;
   cursor: pointer;
   font-size: 1rem;
`

const SelectInputIcon = styled.div`
   width: 20%;
   height: 100%;

   display: flex;
   justify-content: flex-end;
   gap: 20px;
   align-items: center;
   color: #6a6a6a;

   .vertical-line {
      width: 1px;
      height: 20px;
      border-radius: 10px;
      background-color: #8a8a8a;
   }

   svg {
      cursor: pointer;
      width: 12px;
      height: 12px;
   }

   button {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 0.2rem 0.4rem;
      font-size: 0.8rem;
   }
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

export {
   SelectContainer,
   SelectHeader,
   SelectInputWrapper,
   SelectInputField,
   DropdownList,
   DropdownItem,
   SelectInputIcon,
}
