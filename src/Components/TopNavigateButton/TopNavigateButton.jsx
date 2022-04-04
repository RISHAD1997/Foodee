import React, {useState} from 'react'
import {Button} from 'antd';
import {CaretUpOutlined} from '@ant-design/icons';
import styled from 'styled-components';

function TopNavigateButton() {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        } else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0, behavior: 'smooth'
            /* you can also use 'auto' behaviour
         in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <NavigateButton>
            <Button
                style={{
                    display: visible
                        ? 'inline'
                        : 'none'
                }}
                type="primary"
                shape="circle"
                icon={<CaretUpOutlined />}
                size="large"
                onClick={scrollToTop}/>
        </NavigateButton>
    )
}

const NavigateButton = styled.div `
    position: fixed;
    bottom: 5%;
    right: 5%;
    z-index: 10;
 `

export default TopNavigateButton