const styles = {
  base: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 'auto',
    lineHeight: 1.334,

    '@media (min-width: 42rem)': {
      width: '80%'
    },

    '@media (min-width: 65em)': {
      width: '80%'
    }
  },

  space: {
    paddingTop: '0.5em',
  },

  header: {
    borderBottom: '1px solid #eee',
    width: '90%'
  }
};

export default styles;
