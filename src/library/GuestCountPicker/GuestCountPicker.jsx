import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import ProfileIcon from "../../assets/la-icons/profile-icon.svg";
import styled from 'styled-components';

const StyledDropdown = styled.div`
  position: relative;

  .dropdown-button {
    padding: 1rem 1.5rem;
    border: 1px solid #F29254;
    border-radius: 9999px;
    background-color: #fff;
    color: #858585;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    transition: all 0.3s ease;
  }

  .dropdown-content {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    width: 100%;
    background-color: #fff;
    border: 1px solid #F29254;
    border-radius: 0.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 10;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }

  .dropdown-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1.5rem;
    font-weight: bold;
    color: #858585;
    border-bottom: 1px solid #F29254;
    cursor: pointer;
  }

  .dropdown-item:last-child {
    border-bottom: none;
  }

  .arrow-icon {
    color: #858585;
    transition: transform 0.3s ease;
  }

  .arrow-icon.rotate {
    transform: rotate(180deg);
  }

  .counter-button {
    background-color: #F29254;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .counter-button:hover {
    background-color: #f5ac7c;
  }
`;

function GuestCountPicker({ adults, children, rooms, setAdults, setChildren, setRooms }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleAdultChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setAdults(value);
    }
  };

  const handleChildrenChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setChildren(value);
    }
  };

  const handleRoomsChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setRooms(value);
    }
  };

  const incrementCount = (type) => {
    if (type === 'adults') {
      setAdults(adults + 1);
    } else if (type === 'children') {
      setChildren(children + 1);
    } else if (type === 'rooms') {
      setRooms(rooms + 1);
    }
  };

  const decrementCount = (type) => {
    if (type === 'adults' && adults > 1) {
      setAdults(adults - 1);
    } else if (type === 'children' && children > 0) {
      setChildren(children - 1);
    } else if (type === 'rooms' && rooms > 1) {
      setRooms(rooms - 1);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <StyledDropdown isOpen={isOpen} ref={dropdownRef}>
      <button className="dropdown-button" onClick={toggleDropdown}>
        <img src={ProfileIcon} className="mr-2" alt="Profile Icon" />
        {adults} Adult, {children} Child, {rooms} Room
        <IoIosArrowDown className={`arrow-icon ${isOpen ? 'rotate' : ''}`} />
      </button>
      <div className="dropdown-content">
        <div className="dropdown-item">
          <div className='w-[70%] flex justify-between'>
            <span className='w-[90%]'>Adults</span>
            <input
              type="number"
              value={adults}
              onChange={handleAdultChange}
              className=" w-12 text-center"
            />
          </div>
          <div className="flex items-center w-[30%] gap-2">
            <button
              className="counter-button"
              onClick={() => decrementCount('adults')}
            >
              <IoIosArrowDown size={10} />
            </button>
            <button
              className="counter-button"
              onClick={() => incrementCount('adults')}
            >
              <IoIosArrowUp size={10} />
            </button>
          </div>
        </div>
        <div className="dropdown-item">
          <div className='w-[70%] flex justify-between'>
            <span className='w-[90%]'>Children</span>
            <input
              type="number"
              value={children}
              onChange={handleChildrenChange}
              className="w-12 text-center"
            />
          </div>
          <div className="flex items-center w-[30%] gap-2">
            <button
              className="counter-button"
              onClick={() => decrementCount('children')}
            >
              <IoIosArrowDown size={10} />
            </button>
            <button
              className="counter-button"
              onClick={() => incrementCount('children')}
            >
              <IoIosArrowUp size={10} />
            </button>
          </div>
        </div>
        <div className="dropdown-item">
          <div className='w-[70%] flex justify-between'>
            <span className='w-[90%]'>Rooms</span>
            <input
              type="number"
              value={rooms}
              onChange={handleRoomsChange}
              className=" w-12 text-center"
            />
          </div>
          <div className="flex items-center w-[30%] gap-2">
            <button
              className="counter-button"
              onClick={() => decrementCount('rooms')}
            >
              <IoIosArrowDown size={10} />
            </button>
            <button
              className="counter-button"
              onClick={() => incrementCount('rooms')}
            >
              <IoIosArrowUp size={10} />
            </button>
          </div>
        </div>
      </div>
    </StyledDropdown>
  );
}

export default GuestCountPicker;
