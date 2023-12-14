import {Component} from 'react'

import {
  MainContainer,
  CardContainer,
  Heading,
  Form,
  LabelCard,
  Label,
  Input,
  Select,
  Option,
  Button,
  ImgContainer,
  Text,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageInput: '',
    topInput: '',
    bottomInput: '',
    activeOptionId: fontSizesOptionsList[0].optionId,
    bgImage: '',
    topText: '',
    bottomText: '',
    isFontSize: '',
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {imageInput, topInput, bottomInput, activeOptionId} = this.state

    this.setState({
      bgImage: imageInput,
      topText: topInput,
      bottomText: bottomInput,
      isFontSize: activeOptionId,
    })
  }

  onChangeImage = event => {
    this.setState({imageInput: event.target.value})
  }

  onChangeTop = event => {
    this.setState({topInput: event.target.value})
  }

  onChangeBottom = event => {
    this.setState({bottomInput: event.target.value})
  }

  onChangeId = event => {
    this.setState({activeOptionId: event.target.value})
  }

  renderImage = () => {
    const {bgImage, topText, bottomText, isFontSize} = this.state

    return (
      <ImgContainer data-testid="meme" bgUrl={bgImage}>
        <Text isFontSize={isFontSize}>{topText}</Text>
        <Text isFontSize={isFontSize}>{bottomText}</Text>
      </ImgContainer>
    )
  }

  render() {
    const {imageInput, topInput, bottomInput, activeOptionId} = this.state

    return (
      <MainContainer>
        <CardContainer>
          <Heading>Meme Generator</Heading>
          <Form onSubmit={this.onSubmitForm}>
            <LabelCard>
              <Label htmlFor="imageUrl">Image URL</Label>
              <Input
                type="text"
                id="imageUrl"
                placeholder="Enter the Image URL"
                value={imageInput}
                onChange={this.onChangeImage}
              />
            </LabelCard>

            <LabelCard>
              <Label htmlFor="topText">Top Text</Label>
              <Input
                type="text"
                id="topText"
                placeholder="Enter the Top Text"
                value={topInput}
                onChange={this.onChangeTop}
              />
            </LabelCard>

            <LabelCard>
              <Label htmlFor="bottomText">Bottom Text</Label>
              <Input
                type="text"
                id="bottomText"
                placeholder="Enter the Bottom Text"
                value={bottomInput}
                onChange={this.onChangeBottom}
              />
            </LabelCard>

            <LabelCard>
              <Label htmlFor="fontSize">Font Size</Label>
              <Select
                id="fontSize"
                value={activeOptionId}
                onChange={this.onChangeId}
              >
                {fontSizesOptionsList.map(each => (
                  <Option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </Option>
                ))}
              </Select>
            </LabelCard>

            <Button type="submit">Generate</Button>
          </Form>
        </CardContainer>
        {this.renderImage()}
      </MainContainer>
    )
  }
}

export default MemeGenerator
