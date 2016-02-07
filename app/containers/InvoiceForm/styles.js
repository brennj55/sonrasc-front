const styles = {
  base: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',

    '@media (min-width: 42rem)': {
      margin: '48px 72px'
    },

    '@media (min-width: 65em)': {
    }
  },

  space: {
    paddingTop: '0.5em',
  },

  header: {
    width: '100%',
    alignSelf: 'flex-start',
    fontWeight: 400,
    borderBottom: '1px solid #eee'
  },

  innerFlex: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-around'
  },

  evenlyDivided: {
    flex: 1
  },

  columnContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

export default styles;
