import React, { Component } from 'react';
import styled from "styled-components";
import { categories } from "../data";
import Categoriesitems from "./Categoriesitems";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  
`;

class Categories extends Component {
    state = {  } 
    render() { 
        return (
            <Container>
            {categories.map((item) => (
              <Categoriesitems item={item} key={item.id} />
            ))}
          </Container>

        );
    }
}
 
export default Categories;