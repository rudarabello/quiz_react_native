import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Header } from '@rneui/themed';
import { COLORS, STYLES } from '../constants';
import Item from '../components/Item';
import api from '../api/index';
import { alert } from '../helpers/alert';

const Quiz = () => {
  let toDoQuizzes = 7;
  let doneQuizzes = 0;
  const [data, setData] = useState([]);
  const [dataUpdate, setDataUpdate] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get('/quiz');
        setData(response.data);
      } catch (error) {
        alert(
          'Error ao carregar os quizzes, por favor verifique sua conexão',
          'OK',
          'error',
        );
      }
    };
    getData();
  }, [dataUpdate]);

  if (data === []) {
    setDataUpdate(!dataUpdate);
  }

  return (
    <SafeAreaView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
      }}>
      <Header
        backgroundColor={COLORS.Cinza_escuro}
        centerComponent={{ text: 'Quiz', style: STYLES.heading }}
      />
      <View style={STYLES.completedQuiz}>
        <Text style={STYLES.subHeading}>
          quizes cumpridos: {doneQuizzes}/{toDoQuizzes}
        </Text>
      </View>

      <ScrollView>
        <View style={STYLES.items}>
          {data.map((item, index) => {
            // eslint-disable-next-line no-shadow
            const getTotal = (item) => {
              if (item.completed === true) {
                doneQuizzes += 1;
                toDoQuizzes -= 1;
              }
            };
            getTotal(item);
            return (
              <TouchableOpacity key={index}>
                <Item item={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Quiz;
