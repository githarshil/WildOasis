import styled from "styled-components";

const Input = styled.input.attrs((props) => ({
        type:"name",
        placeholder:props.place,
}))`
padding: 0.2rem 1.2rem;
border: 1px solid var(--color-grey-300);

`

export default Input