import React from 'react';
import ICardInfoProps from './interface';
import styled from 'styled-components';

import { ReactComponent as Location } from "../../icons/location.svg";
import { ReactComponent as Blog } from "../../icons/blog.svg";
import { ReactComponent as Watcher } from "../../icons/watcher.svg";
import { ReactComponent as Fork } from "../../icons/fork.svg";
import { ReactComponent as Star } from "../../icons/star.svg";

interface IIcons {
  [key: string]: any
}

const CardInfo: React.FC<ICardInfoProps> = (props: ICardInfoProps) => {
  const ICONS: IIcons = {
    location: Location,
    blog: Blog,
    watchers: Watcher,
    forks: Fork,
    stars: Star
  };

  const getIcons = (props: any) => {
    const keys = Object.keys(props);
    const icons = [];

    for (let i = 0; i < keys.length; i++) {
      let propName: string = keys[i];

      if (ICONS[propName]) {
        icons.push({
          Icon: ICONS[propName],
          content: props[propName]
        });
      }
    }

    return icons;
  };

  return (
    <CardInfoWrapper style={props.style}>
      {
        props.imageUrl && (
          <ImageWrapper>
            <Image src={props.imageUrl} />
          </ImageWrapper>
        )
      }
    
      <Content>
        {
          props.name && (
            <Name>
              {props.name}
            </Name>
          )
        }

        {
          props.description && (
            <Description>
              {props.description}
            </Description>
          )
        }
        
        {
          props.repoName && (
            <RepoName
              href={props.repoLink}
            >
              {props.repoName}
            </RepoName>
          )
        }

        <Indicators>
          {
            getIcons(props).map((icon, idx) => {
                const { Icon, content } = icon;

                return (
                  <Indicator
                    key={idx}
                  >
                    <Icon key={idx} />
                    
                    <IconContent>
                      {
                        content === null ? 
                          'Нет данных' :
                          content !== 0 ? 
                            content : 
                            0
                      }
                    </IconContent>
                  </Indicator>
                );
              }
            )
          }
        </Indicators>
      </Content>
    </CardInfoWrapper>
  );
};

export default CardInfo;

const CardInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 6px;
  overflow: hidden;
  margin-right: 15px;
`;

const Image = styled.img`
  width: 100%;
`;

const Description = styled.p`
  margin: 0 0 7px;
  color: ##959da5;
`;

const RepoName = styled.a`
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const Indicators = styled.div`
  display: flex;
`;

const Indicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Name = styled.p`
  margin: 0 0 7px;
  font-size: 20px;
`;

const IconContent = styled.span`
  margin-left: 5px;
`;