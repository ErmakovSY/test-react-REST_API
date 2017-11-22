/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { SectionWrapper, Overlay, TitleList, ListButton } from './../../components/styledComponents';
import Form from './../../components/Form';
import ProductCard from './../../components/ProductCard';

const MainSection = (props) => {
  const { submitRegisterFormHandler, submitLoginFormHandler, closeModalHandler, getActiveProduct, activeProduct, formToShow, productList, token } = props;
  return (
    <SectionWrapper>
      <Overlay 
        visible={formToShow !== '' ? 1 : 0}
      >
      </Overlay>
      <Form 
        submitRegisterFormHandler={submitRegisterFormHandler}
        submitLoginFormHandler={submitLoginFormHandler}
        closeModalHandler={closeModalHandler}
        formToShow={formToShow}
      />
      <TitleList>
        {
          productList.map(item => (
            <li key={item.title}>
              <ListButton
                onClick={getActiveProduct.bind(this, item.id)}
              >
                <span>{item.title}</span>
              </ListButton>  
            </li>
          ))
        }
      </TitleList>
      <ProductCard 
        data={activeProduct} 
        token={token}
      />
    </SectionWrapper>
  )
}

MainSection.propTypes = {
  submitRegisterFormHandler: PropTypes.func.isRequired,
  submitLoginFormHandler: PropTypes.func.isRequired,
  closeModalHandler: PropTypes.func.isRequired,
  getActiveProduct: PropTypes.func.isRequired,
  formToShow: PropTypes.string.isRequired,
  activeProduct: PropTypes.object.isRequired,
  productList: PropTypes.array.isRequired
}

export default MainSection;