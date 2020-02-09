import React, { FunctionComponent } from 'react'; // importing FunctionComponent

type HeaderProps = {
  title: string
}

export const Header: FunctionComponent<HeaderProps> = ({ title }) => <aside>
  <h1 style={{textAlign: "center"}}>
    { title }
  </h1>
</aside>
