import React, { FunctionComponent } from 'react'; // importing FunctionComponent

type ParagraphProps = {
  paragraph: string
}

export const Paragraph: FunctionComponent<ParagraphProps> = ({ paragraph }) => <aside>
  <p>
    { paragraph }
  </p>
</aside>

const el = <Paragraph paragraph="FX-Calculator"/>