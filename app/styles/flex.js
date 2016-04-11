const styles = {
  base: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',

    '@media (minWidth: 42rem)': {
      margin: '48px 72px'
    },

    '@media (minWidth: 65em)': {
    }
  },

  centerFlex: {
    minHeight: '60vh',
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },

  centerFlexRow: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },

  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    margin: '2em',
    padding: '2em',
    justifyContent: 'space-between',
    height: '300px'
  },

  centerFlexItem: {
    width: '50%'
  },

  space: {
    padding: '1em 0',
  },

  marginSpace: {
    margin: '2em 0'
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
    flexWrap: 'wrap',
    justifyContent: 'space-around',

    '@media (max-width: 1000px)': {
      flexDirection: 'column',
    }
  },

  spaceBetween: {
    display: 'flex',
    justifyContent: 'space-between'
  },

  innerFlexNoWrap: {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column'
  },

  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: '0',
    bottom: '0',
    right: '0',
    left: '0',
    width: '100%',
    opacity: '0'
  },

  label: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: '12px'
  },

  flex1: {
    flex: '1 1 45%',

    '@media (maxWidth: 1000px)': {
      flex: '1 1 100%',
    }
  },

  cropFlex: {
    flex: '1 1 30%'
  },

  buttonFlex: {
    flex: '1 1 5%'
  },

  flex2: {
    flex: '1 1 50%'
  },

  columnContainer: {
    flex: '1 1 45%',
    display: 'flex',
    flexDirection: 'column',

    '@media (maxWidth: 1000px)': {
      flex: '1 1 100%',
    }
  },

  grid: {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      paddingTop: '5px',
      flex: '1 1 30%',
      overflowY: 'auto',
    },
  }
};

export default styles;
