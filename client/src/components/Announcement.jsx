import { styled } from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    padding-left: 65px;
`;

const Announcement = () => {
    return (
        <Container>
            📢 ANNOUNCEMENT: INTRODUCING NEW PRODUCTS AND EXCLUSIVE DISCOUNTS! SHOP NOW AND ENJOY INCREDIBLE SAVINGS!        
        </Container>
    )
}

export default Announcement