import React, { Component } from 'react'
import { Popover, Menu, Position, Switch, Icon } from 'evergreen-ui'
import PropTypes from 'prop-types'

class ConfigMenu extends Component {
  constructor (props) {
    super()
    this.handleOnOpen = this.handleOnOpen.bind(this)
    this.handleOnClose = this.handleOnClose.bind(this)

    this.state = {
      isOpen: false
    }
  }

  handleOnOpen () {
    this.setState({ isOpen: true })
  }

  handleOnClose () {
    this.setState({ isOpen: false })
  }

  render () {
    const {
      onSaveSelect,
      isPlaying,
      onPlayPauseSelect,
      defaultPlayChecked,
      onDefaultPlayChange,
      colorStayChecked,
      onColorStayChange,
      selected,
      onBgOptionChange
    } = this.props

    return (
      <div id='menu' data-html2canvas-ignore>
        <Popover
          position={Position.BOTTOM_RIGHT}
          onOpen={this.handleOnOpen}
          onClose={this.handleOnClose}
          content={
            <Menu>
              <Menu.OptionsGroup
                title='背景'
                options={[
                  { label: 'Waves', value: 'waves' },
                  { label: 'Blobs', value: 'blobs' }
                ]}
                selected={selected}
                onChange={onBgOptionChange}
              />
              <Menu.Divider />

              <Menu.Group title='操作'>
                <Menu.Item
                  icon='download'
                  intent='success'
                  onSelect={onSaveSelect}
                >
                  保存背景
                </Menu.Item>
                <Menu.Item
                  icon={isPlaying ? 'pause' : 'play'}
                  intent='success'
                  onSelect={onPlayPauseSelect}
                >
                  {isPlaying ? '暂停动画' : '播放动画'}
                </Menu.Item>
              </Menu.Group>

              <Menu.Divider />

              <Menu.Group title='设置'>
                <Menu.Item secondaryText='默认播放动画'>
                  <Switch
                    checked={defaultPlayChecked}
                    onChange={onDefaultPlayChange}
                  />
                </Menu.Item>
                <Menu.Item secondaryText='保留颜色名称'>
                  <Switch
                    checked={colorStayChecked}
                    onChange={onColorStayChange}
                  />
                </Menu.Item>
              </Menu.Group>
            </Menu>
          }
        >
          <Icon
            id='menu-btn'
            icon='cog'
            size={25}
            color='white'
            className={this.state.isOpen && 'open'}
          />
        </Popover>
      </div>
    )
  }
}

ConfigMenu.propTypes = {
  onSaveSelect: PropTypes.func.isRequired,
  onPlayPauseSelect: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  defaultPlayChecked: PropTypes.bool.isRequired,
  onDefaultPlayChange: PropTypes.func.isRequired,
  colorStayChecked: PropTypes.bool.isRequired,
  onColorStayChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  onBgOptionChange: PropTypes.func.isRequired
}

export default ConfigMenu
