import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';
import Form from './components/Form';
import CardInfo from './components/CardInfo';
import Pagination from './components/Pagination';
import { showLoader } from './actions';

import { loadCompanyRepos } from './actions';

interface IRepo {
  watchers_count: number,
  stargazers_count: number,
  forks: number,
  name: string,
  html_url: string
}

interface ICompany {
  companyInfo: {
    url: string,
    imageUrl: string,
    name: string,
    avatar_url: string,
    location: string,
    blog: string,
    description: string,
  },
  companyRepos: Array<IRepo>
}

interface RootState {
  company: ICompany,
  error: Boolean,
  isFetching: Boolean
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`

function App() {
  let dispatch = useDispatch();
  const { company } = useSelector((state: RootState) => state);
  const { error } = useSelector((state: RootState) => state);
  const { isFetching } = useSelector((state: RootState) => state);
  const { companyInfo, companyRepos } = company;

  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(8);

  const indexOfLastImage = currentPage * reposPerPage;
  const indexOfFirstImage = indexOfLastImage - reposPerPage;
  const currentRepos = companyRepos.slice(indexOfFirstImage, indexOfLastImage);
  
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);


  const getData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(showLoader());
    const companyName = (document.querySelector('input') as HTMLInputElement).value;
    (document.querySelector('input') as HTMLInputElement).value = '';
    dispatch(loadCompanyRepos(companyName));
  };

  return (
    <>
      <GlobalStyle />

      <View>
        <Form
          onSubmit={getData}
        />

        {
          Object.keys(companyInfo).length !== 0 &&
          <CardInfo
            imageUrl={companyInfo.avatar_url}
            name={companyInfo.name}
            location={companyInfo.location}
            blog={companyInfo.blog}
            description={companyInfo.description}
            style={{
              borderBottom: '1px solid #d1d5da',
              paddingBottom: '20px',
              marginBottom: '30px'
            }}
          />
        }

        <Repo>
          {
            currentRepos &&
            currentRepos.map((repo, idx) => (
              <CardInfo
                key={idx}
                watchers={repo.watchers_count}
                stars={repo.stargazers_count}
                forks={repo.forks}
                repoName={repo.name}
                repoLink={repo.html_url}
                style={{
                  padding: '25px',
                  boxShadow: '5px 1px 30px rgba(0,0,0,.2)',
                  flexBasis: '15%',
                  margin: '0 20px 20px 0',
                  borderRadius: '20px',
                  height: '100px',
                  justifyContent: 'center',
                  textAlign: 'center'
                }}
              />
            ))
          }
        </Repo>

        {
          isFetching && (
            <Overlay>
              <p>Loader...</p>
            </Overlay>
          )
        }

        {
          error && (
            <Overlay>
              <h1>Такой компании не зарегистрировано</h1>
            </Overlay>
          )
        }
      </View>

      <Pagination
        paginate={paginate}
        totalItems={companyRepos.length}
        itemsPerPage={reposPerPage}
      />
    </>
  );
}

export default App;

const View = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

const Repo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Overlay = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
  width: 100%;
  height: calc(100% - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
`;