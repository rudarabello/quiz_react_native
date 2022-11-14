import React from 'react';
import { View, Text } from 'react-native';
import { COLORS, STYLES } from '../constants';

const Item = (props) => {
  var color = COLORS.Branco;
  if (
    props.item.completed === true &&
    props.item.maxScore === props.item.userScore
  ) {
    color = COLORS.Verde;
  } else if (
    props.item.completed === true &&
    props.item.maxScore !== props.item.userScore
  ) {
    color = COLORS.Vermelho;
  }
  return (
    <View style={STYLES.item}>
      <View style={STYLES.itemLeft}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            backgroundColor: `${color}`,
            width: 24,
            height: 24,
            opacity: 0.4,
            borderRadius: 20,
            marginRight: 15,
          }}
        />
        <Text style={STYLES.itemText}>{props.item.name}</Text>
      </View>
      <Text style={STYLES.itemText}>{props.item.maxScore} pts</Text>
    </View>
  );
};

export default Item;
