if !exists("*s:RunTests")
  function s:RunTests()
    let command="tmux send-keys -t bottom-left npm" . "' '" . "test" . "$'\n'"

    echo system(command)
  endfunction
endif

if !exists("*s:DebugTests")
  function s:DebugTests()
    let command="tmux send-keys -t bottom-left npm" . "' '" . "run" . "' '" . "test:debug" . "$'\n'"

    echo system(command)
  endfunction
endif

nmap <buffer> <leader>T :call <SID>RunTests()<CR>
nmap <buffer> <leader>D :call <SID>DebugTests()<CR>
