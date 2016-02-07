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
    paddingBottom: '0.5em',
  },

  header: {
    width: '100%',
    paddingBottom: '0.3em',
    alignSelf: 'flex-start',
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: '24px',
    fontWeight: 400,
    borderBottom: '1px solid #eee'
  },

  subheader: {
    fontSize: '20px',
    color: 'rgba(0, 0, 0, 0.87)',
    fontWeight: 400,
    borderBottom: '1px solid #eee'
  },

  innerFlex: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-around'
  },

  label: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '12px'
  },

  flex1: {
    flex: 2
  },

  flex2: {
    flex: 2
  },

  columnContainer: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column'
  }
};

export default styles;
