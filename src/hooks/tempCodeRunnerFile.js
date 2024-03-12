  const getMovies = useCallback  ( async ({search}) => {
    if (previusSearch.current === search) return;

    try {
      setLoading(true);
      setError(null);
      previusSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, []);