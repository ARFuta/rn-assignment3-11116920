
import { ScrollView, StyleSheet, Text, View, FlatList} from 'react-native';

const tasks = [
    {
      id: '1',
      title: 'Mobile App Development',
    },
    {
      id: '2',
      title: 'Web Development',
    },
    {
      id: '3',
      title: 'Data Mining',
    },
    {
        id: '4',
        title: 'Calculus I',
      },
      {
        id: '5',
        title: 'Digital Systems',
      },
      {
        id: '6',
        title: 'Introduction to Probability',
      },
      {
        id: '7',
        title: 'Elementary Statistics',
      },
      {
        id: '8',
        title: 'Linear Algebra',
      },
      {
        id: '9',
        title: 'Computer Systems',
      },
      {
          id: '10',
          title: 'Algorithms',
        },
        {
          id: '11',
          title: 'Probablity',
        },
        {
          id: '12',
          title: 'Database',
        },
        {
            id: '13',
            title: 'E-Commerce',
          },
          {
            id: '14',
            title: 'Programming I',
          },
          {
            id: '12',
            title: 'Software Development',
          },
    
  ];
  
  const TaskCard = ({ task }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{task.title}</Text>
    </View>
  );

export default function OngoingTask() {
  return (
    <View style={styles.container}>
    <Text style={{ fontSize: 20 , marginBottom:20, fontWeight:'bold'}}>Ongoing Task</Text>

    <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskCard task={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
   

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
    marginLeft:20,
    marginRight:20,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  contentContainer: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 16,
    padding: 16,
    height: 128,
    alignContent:'center',
   borderColor: '#E8D1BA', 
   borderWidth: 1, 
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
  },
});
