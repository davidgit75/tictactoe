const random_choice = (arr) =>
    arr[Math.floor(Math.random() * arr.length)]

const available_positions = (results) => {
    let avail = results.map((row, r) =>
                        row.map((v, c) =>
                            v == null ? [r, c] :  null))
    avail = avail.reduce((acc, val) => {
        if (val)
            return acc = [...acc, ...val]
        return acc
   }, []).filter(Boolean)
   console.log('AVAUIL', avail)
   return avail
}

export const makeRandomMove = (results, player) => {
    const available = available_positions(results)
    const random = random_choice(available)
    const new_results = [...results]
    new_results[random[0]][random[1]] = player
    console.log('new_results', new_results)
    return new_results
}

export const makeAIMove = (results, player) => {
    const available = available_positions(results)
    const random = random_choice(available)
    const new_results = [...results]
    new_results[random[0]][random[1]] = player
    console.log('new_results', new_results)
    return new_results
}
