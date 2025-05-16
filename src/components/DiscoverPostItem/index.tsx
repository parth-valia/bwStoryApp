import { FC, useRef, useState } from 'react';
import { Image, Platform, Text, TouchableOpacity, View } from 'react-native';
import Video, { ControlsStyles, VideoRef } from 'react-native-video';

import Icon from 'react-native-easy-icon';
import { Colors } from '../../styles/colors';
import { globalStyle } from '../../styles/global-style';
import { styles } from './styles';

interface DiscoverPostItemProps {
  item: {
    id: string;
    user: string;
    location: string;
    views: number;
    date: string;
    title: string;
    video: string;
    avatar: string;
  };
  ownPost?: boolean;
}
const DiscoverPostItem: FC<DiscoverPostItemProps> = ({item, ownPost}) => {
  const videoRef = useRef<VideoRef>(null);
  const [paused, setPaused] = useState(true);
  const [liked, setLiked] = useState(false);
  const [followed, setFollowed] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoControlsStyle: ControlsStyles = {
    hidePrevious: true,
    hideNext: true,
    hidePlayPause: true,
    hideForward: true,
    hideRewind: true,
  };

  return (
    <View style={styles.postContainer}>
      {!ownPost && (
        <View style={styles.header}>
          <Image source={{uri: item.avatar}} style={styles.avatar} />
          <View style={globalStyle.flex1}>
            <Text style={styles.username}>{item.user}</Text>
          </View>
          <TouchableOpacity
            onPress={() => setFollowed(!followed)}
            style={followed ? styles.followBtn : styles.outlineFollowBtn}>
            <Text
              style={followed ? styles.followText : styles.outlineFollowText}>
              {followed ? 'Following' : 'Follow'}
            </Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          source={{uri: item.video}}
          style={styles.video}
          resizeMode="cover"
          paused={paused}
          controls
          controlsStyles={videoControlsStyle}
          onControlsVisibilityChange={e => {
            setShowControls(e.isVisible);
          }}
        />
        {Platform.OS === 'android' && showControls && (
          <View style={styles.overlayControls}>
            <TouchableOpacity onPress={() => videoRef.current?.seek(0)}>
              <Icon type="feather" name="rotate-ccw" size={28} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setPaused(!paused)}>
              <Icon
                type="font-awesome5"
                name={paused ? 'play' : 'pause'}
                size={28}
                color="#fff"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => videoRef.current?.seek(0)}>
              <Icon type="feather" name="rotate-cw" size={28} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View style={styles.metaInfo}>
        <Text style={styles.txt}>{item.date}</Text>
        <View style={globalStyle.flexRowAlignCenter}>
          <Text style={styles.txt}>{item.location}</Text>
          <View style={styles.separator} />
          <Text style={styles.txt}>{item.views} Views</Text>
        </View>
      </View>

      <Text style={styles.title}>{item.title}</Text>

      <View style={styles.actionBar}>
        <TouchableOpacity onPress={() => setLiked(!liked)}>
          <Icon
            type="ionicon"
            name={liked ? 'heart' : 'heart-outline'}
            size={22}
            color={Colors.dark_blue}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="share"
            type="feather"
            size={20}
            color={Colors.dark_blue}
            style={styles.share}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="comment"
            type="fontisto"
            size={18}
            color={Colors.dark_blue}
            style={styles.share}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DiscoverPostItem;
