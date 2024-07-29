import { useContext, useState } from "react";
import styled from "styled-components";
import TimeViewModel from "../viewModel";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 600px;
  background-color: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  overflow-y: auto;
`;

const ToggleButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 10;
`;

export default function Dev() {
  const { policy, selectedPeriod, blockedTimeSlots } = useContext(
    TimeViewModel.Context
  );
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <ToggleButton onClick={toggleModal}>
        {isOpen ? "Hide" : "Show"} Dev Info
      </ToggleButton>
      <ModalContainer isOpen={isOpen}>
        <div style={{ padding: "20px" }}>
          <h3>Policy</h3>
          <pre>{JSON.stringify(policy, null, 2)}</pre>
        </div>
        <div style={{ padding: "20px" }}>
          <h3>Selected Period</h3>
          <pre>{JSON.stringify(selectedPeriod, null, 2)}</pre>
        </div>
        <div style={{ padding: "20px" }}>
          <h3>Blocked Time Slots</h3>
          <pre>
            {blockedTimeSlots
              .map((time) => {
                const hktTime = new Date(new Date(time).getTime());
                return hktTime.toString();
              })
              .join("\n")}
          </pre>
        </div>
      </ModalContainer>
    </>
  );
}
