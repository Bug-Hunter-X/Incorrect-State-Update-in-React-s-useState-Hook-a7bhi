```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct way to update state
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```